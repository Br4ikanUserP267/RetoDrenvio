import multer from "multer";
import path from "path";

// Configuración de almacenamiento con ruta correcta
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve("src/uploads/")); // Ruta absoluta a "src/uploads"
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, `${Date.now()}-${file.fieldname}${ext}`);
    }
});

// Filtro para aceptar solo imágenes
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only images are allowed"), false);
    }
};

// Middleware de multer
export const upload = multer({ storage, fileFilter });
