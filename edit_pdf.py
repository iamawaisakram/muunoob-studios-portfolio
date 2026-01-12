#!/usr/bin/env python3
"""
Script to edit text in a PDF file.
Changes "Nov 2023 - Jan 2025" to "Nov 2022 - Aug 2023" for the vFairs position only.
Matches the exact font (Poppins, 11pt).
"""

import subprocess
import sys
import os

# First, ensure required packages are installed
def install_packages():
    packages = ['PyMuPDF']
    for package in packages:
        try:
            subprocess.check_call([sys.executable, '-m', 'pip', 'install', package, '-q'])
        except subprocess.CalledProcessError:
            print(f"Warning: Could not install {package}")

print("Installing required packages...")
install_packages()

import fitz  # PyMuPDF


def find_poppins_font():
    """Try to find Poppins font on the system."""
    possible_paths = [
        "/System/Library/Fonts/",
        "/Library/Fonts/",
        os.path.expanduser("~/Library/Fonts/"),
        "/usr/share/fonts/",
        "/usr/local/share/fonts/",
    ]

    for base_path in possible_paths:
        if os.path.exists(base_path):
            for root, dirs, files in os.walk(base_path):
                for file in files:
                    if "poppins" in file.lower() and file.endswith(('.ttf', '.otf')):
                        return os.path.join(root, file)
    return None


def edit_pdf_targeted(input_path: str, output_path: str, old_text: str, new_text: str, near_text: str):
    """
    Edit text in a PDF by redacting old text and inserting new text,
    but only for instances near a specific reference text.
    Uses the exact font from the original PDF.
    """
    # Open the PDF
    doc = fitz.open(input_path)

    for page_num in range(len(doc)):
        page = doc[page_num]

        # Search for the reference text (vFairs)
        reference_instances = page.search_for(near_text)

        if not reference_instances:
            continue

        print(f"Found reference text '{near_text}' on page {page_num + 1}")

        # Get the Y coordinate of the reference text
        for ref_inst in reference_instances:
            ref_y_center = (ref_inst.y0 + ref_inst.y1) / 2
            print(f"  Reference Y center: {ref_y_center}")

        # Search for the date text
        text_instances = page.search_for(old_text)

        # Find the instance that's on the same line as vFairs (similar Y coordinate)
        target_instance = None
        for inst in text_instances:
            inst_y_center = (inst.y0 + inst.y1) / 2
            print(f"Found '{old_text}' at Y center: {inst_y_center}")

            # Check if this instance is on the same line as any reference text
            for ref_inst in reference_instances:
                ref_y_center = (ref_inst.y0 + ref_inst.y1) / 2
                # Allow some tolerance for Y coordinate matching (within 20 pixels)
                if abs(inst_y_center - ref_y_center) < 20:
                    target_instance = inst
                    print(f"  -> This is on the same line as '{near_text}'!")
                    break

            if target_instance:
                break

        if not target_instance:
            print(f"No instance of '{old_text}' found near '{near_text}'")
            continue

        print(f"\nReplacing only the instance at: {target_instance}")

        # Redact only the target instance
        page.add_redact_annot(target_instance, fill=(1, 1, 1))
        page.apply_redactions()

        # Font settings from analysis
        font_size = 11.0

        # Try to find and use Poppins font
        poppins_path = find_poppins_font()

        # Calculate text position - use the origin point from analysis
        # The origin Y is at baseline, we need to position correctly
        text_point = fitz.Point(target_instance.x0, target_instance.y1 - 4)

        if poppins_path:
            print(f"Using Poppins font from: {poppins_path}")
            page.insert_text(
                text_point,
                new_text,
                fontsize=font_size,
                fontfile=poppins_path,
                fontname="Poppins",
                color=(0, 0, 0)
            )
        else:
            print("Poppins font not found, using Helvetica as fallback")
            # Use Helvetica which is similar to Poppins
            page.insert_text(
                text_point,
                new_text,
                fontsize=font_size,
                fontname="helv",
                color=(0, 0, 0)
            )

        print(f"Replaced with '{new_text}' at font size {font_size}")

    # Save the modified PDF
    doc.save(output_path)
    doc.close()

    print(f"\nSaved modified PDF to: {output_path}")


def main():
    # Configuration
    input_pdf = input("Enter the path to your PDF file: ").strip()

    if not os.path.exists(input_pdf):
        print(f"Error: File not found: {input_pdf}")
        sys.exit(1)

    # Generate output filename
    base, ext = os.path.splitext(input_pdf)
    output_pdf = f"{base}_edited{ext}"

    # The text to find and replace
    old_text = "Nov 2023 - Jan 2025"
    new_text = "Nov 2022 - Aug 2023"
    near_text = "vFairs"  # Only replace the date near this text

    print(f"\nInput file: {input_pdf}")
    print(f"Output file: {output_pdf}")
    print(f"Replacing: '{old_text}' -> '{new_text}'")
    print(f"Only near: '{near_text}'")
    print("-" * 50)

    edit_pdf_targeted(input_pdf, output_pdf, old_text, new_text, near_text)

    print("\nDone!")


if __name__ == "__main__":
    main()
