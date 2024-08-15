import os
import re

def extract_title(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
        match = re.search(r'^---\ntitle:\s*(.*)\n', content, re.MULTILINE)
        if match:
            return match.group(1)
    return os.path.basename(file_path)

def clean_directory_name(dir_name):
    # Remove leading numbers and hyphens, and convert to title case
    clean_name = re.sub(r'^\d+-', '', dir_name)
    clean_name = clean_name.replace('-', ' ')
    return clean_name.title()

def add_directory_content(mindmap_content, dir_path, indent_level):
    for root, dirs, files in os.walk(dir_path):
        for dir in dirs:
            clean_name = clean_directory_name(dir)
            mindmap_content += f"{'    ' * indent_level}{clean_name}\n"
            subdir_path = os.path.join(root, dir)
            mindmap_content = add_directory_content(mindmap_content, subdir_path, indent_level + 1)
        for file in files:
            if file.endswith(".mdx") and file != "intro.mdx":
                title = extract_title(os.path.join(root, file))
                clean_name = clean_directory_name(os.path.basename(root))
                if title != clean_name:
                    mindmap_content += f"{'    ' * (indent_level + 1)}{title}\n"
        break  # Only get top-level directories and files in each call
    return mindmap_content

def generate_mindmap():
    mindmap_content = """
mindmap
    Intro
"""
    mindmap_content = add_directory_content(mindmap_content, "docs", 2)  # Start with indent level 2

    with open("mindmap.mmd", "w", encoding='utf-8') as file:
        file.write(mindmap_content)

if __name__ == "__main__":
    generate_mindmap()
