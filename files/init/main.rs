use std::fs;
use std::env;
use std::path::{Path, PathBuf};
use std::io;

fn get_project_dir() -> io::Result<PathBuf> {
    /* Get the directory of the compiled executable */
    let exe_path = env::current_exe()?;
    let project_dir = exe_path.parent().unwrap_or_else(|| Path::new(".")).to_path_buf();
    Ok(project_dir)
}

fn recreate_storage_folder() -> io::Result<()> {
    let project_dir = get_project_dir()?;
    let storage_path = project_dir.join("../../file_storage"); 

    if storage_path.exists() {
        println!("Deleting existing folder: {:?}", storage_path);
        fs::remove_dir_all(&storage_path)?;
    }

    println!("Creating new folder: {:?}", storage_path);
    fs::create_dir_all(&storage_path)?;

    Ok(())
}

fn main() {
    match recreate_storage_folder() {
        Ok(_) => println!("file_storage directory is ready!"),
        Err(e) => eprintln!("Error: {}", e),
    }
}