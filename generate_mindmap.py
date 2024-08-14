import os

def generate_mindmap():
    mindmap_content = """
mindmap
  root
    Intro
"""
    for root, dirs, files in os.walk("docs"):
        for dir in dirs:
            mindmap_content += f"    {dir}\n"
            subdir_path = os.path.join(root, dir)
            for subroot, subdirs, subfiles in os.walk(subdir_path):
                for file in subfiles:
                    if file.endswith(".mdx"):
                        mindmap_content += f"      {file}\n"
                break  # Only get top-level files in each subdirectory
        break  # Only get top-level directories

    with open("mindmap.mmd", "w") as file:
        file.write(mindmap_content)

if __name__ == "__main__":
    generate_mindmap()
