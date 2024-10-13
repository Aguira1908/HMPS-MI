#!/bin/bash

# Array daftar folder yang akan dibuat
folders=("header" "home" "aboutUs" "activity" "outProduct" "login" "signIn")

# Membuat folder components di dalam src jika belum ada
mkdir -p ./frontend/src/components

# Loop melalui setiap folder yang akan dibuat
for folder in "${folders[@]}"
do
    # Membuat folder di dalam components
    echo "Membuat folder $folder di dalam src/components..."
    mkdir -p ./frontend/src/components/$folder

    # Membuat file JSX
    echo "Membuat file $folder.jsx di dalam src/components/$folder..."
    cat <<EOL > ./frontend/src/components/$folder/$folder.jsx
import React from 'react';
import './$folder.css';

const ${folder^} = () => {
    return (
        <div className="$folder">
            <h1>This is the $folder component</h1>
        </div>
    );
}

export default ${folder^};
EOL

    # Membuat file CSS
    echo "Membuat file $folder.css di dalam src/components/$folder..."
    cat <<EOL > ./frontend/src/components/$folder/$folder.css
/* CSS untuk komponen $folder */
.$folder {
    text-align: center;
    margin: 20px;
}
EOL

done

echo "Proses pembuatan folder dan file selesai!"
