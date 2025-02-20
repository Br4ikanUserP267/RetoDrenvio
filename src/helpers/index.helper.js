import chalk from "chalk"; // Importamos esto para el color de la consola 

export const showWelcomeMessage = (port) => {
    console.log(chalk.blue.bold("\n🚀 Welcome to Drenvio API!"));
    console.log(chalk.green("🌍 This API is made for a QUIZ."));
    console.log(chalk.yellow(`🚀 Server running on: http://localhost:${port}\n`));
};

export const showConnectionError = (error) => {
    console.error(chalk.red.bold("❌ Connection error:"), chalk.red(error.message || error));
    process.exit(1);
};

export const getWelcomeMessage = (req, res) => {
    res.json({
        message: "🚀 Welcome to Drenvio test!",
        description: "🌍 This API is made for a test.",
        status: "✅ Running Successfully"
    });
};
