import mongoose from "mongoose";

mongoose.connect("http://localhost:27017/Evgeny", { useNewUrlParser: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  // we're connected!
});

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = () => {
  const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittySchema);

const silence = new Kitten({ name: "Silence" });
console.log(silence.name);

fluffy.save(function(err, fluffy) {
  if (err) return console.error(err);
  fluffy.speak();
});

Kitten.find(function(err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
});

const fluffy = new Kitten({ name: "fluffy" });
fluffy.speak();
