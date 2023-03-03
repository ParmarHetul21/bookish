const dbName = "fanfic-arena";
const mongoose = require("mongoose");
const localMongoURI = `mongodb://localhost:27017/${dbName}`;
// const mongoURI = `mongodb+srv://fanficuser:fanficarena594@cluster0.gghme.mongodb.net/${dbName}?retryWrites=true&w=majority`;

const mongoURI = `mongodb://localhost:27017`;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
};

mongoose.connect(mongoURI, options);

mongoose.connection.on("connected", () =>
	console.log("connected on:", localMongoURI)
);

mongoose.connection.on("error", (err) => console.log("error:", err));

mongoose.connection.on("disconnected", () => console.log("disconnected"));

process.on("SIGINT", () => {
	mongoose.connection.close(() => {
		console.log("app terminated, closing mongo connection");
		process.exit(0);
	});
});
