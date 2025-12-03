// Tauri Backend - Handles native system integration
#![cfg_attr(all(not(debug_assertions), target_os = "windows"), windows_subsystem = "windows")]

use tauri::{generate_context, generate_handler};

#[tauri::command]
fn get_app_version() -> String {
    env!("CARGO_PKG_VERSION").to_string()
}

#[tauri::command]
fn log_message(message: String) {
    println!("[LOG] {}", message);
}

#[tauri::command]
fn get_platform() -> String {
    std::env::consts::OS.to_string()
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(generate_handler![
            get_app_version,
            log_message,
            get_platform
        ])
        .run(generate_context!())
        .expect("error while running tauri application");
}
