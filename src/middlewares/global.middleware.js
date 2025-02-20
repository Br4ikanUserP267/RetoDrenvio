import morgan from "morgan";
import express from "express";
import path from "path";


// Helper para configurar middlewares
export const configureMiddlewares = (app) => {
    app.use(morgan("dev"));
    app.use(express.json());
    app.use("/uploads", express.static(path.join(process.cwd(), "src/uploads")));

};
