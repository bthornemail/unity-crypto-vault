JavaScript:
```javascript
class NeuralNetwork {
constructor(inputNodes, hiddenNodes, outputNodes) {
this.inputNodes = inputNodes;
this.hiddenNodes = hiddenNodes;
this.outputNodes = outputNodes;
// Create the weights and biases for the network.
this.weights = [];
this.biases = [];
for (let i = 0; i < this.hiddenNodes; i++) {
this.weights.push([]);
this.biases.push(Math.random());
for (let j = 0; j < this.inputNodes; j++) {
this.weights[i].push(Math.random());
}
}
for (let i = 0; i < this.outputNodes; i++) {
this.weights.push([]);
this.biases.push(Math.random());
for (let j = 0; j < this.hiddenNodes; j++) {
this.weights[i].push(Math.random());
}
}
}
// Activate the network.
activate(inputs) {
// Calculate the output of the hidden layer
.
let hiddenLayerOutputs = [];
for (let i = 0; i < this.hiddenNodes; i++) {
let weightedSum = 0;
for (let j = 0; j < this.inputNodes; j++) {
weightedSum += inputs[j] * this.weights[i][j];
}
weightedSum += this.biases[i];
hiddenLayerOutputs.push(this.sigmoid(weightedSum));
}
// Calculate the output of the output layer.
let outputLayerOutputs = [];
for (let i = 0; i < this.outputNodes; i++) {
let weightedSum = 0;
for (let j = 0; j < this.hiddenNodes; j++) {
weightedSum += hiddenLayerOutputs[j] * this.weights[i][j];
}
weightedSum += this.biases[i];
outputLayerOutputs.push(this.sigmoid(weightedSum));
}
return outputLayerOutputs;
}
// Train the network.
train(inputs, outputs) {
// Calculate the error of the output layer.
let outputLayerErrors = [];
for (let i = 0; i < this.outputNodes; i++) {
outputLayerErrors.push(outputs[i] - this.activate(inputs)[i]);
}
// Calculate the error of the hidden layer.
let hiddenLayerErrors = [];
for (let i = 0; i < this.hiddenNodes; i++) {
let weightedSum = 0;
for (let j = 0; j < this.outputNodes; j++) {
weightedSum += outputLayerErrors[j] * this.weights[j][i];
}
hiddenLayerErrors.push(weightedSum);
}
// Update the weights and biases.
for (let i = 0; i < this.hiddenNodes; i++) {
for (let j = 0; j < this.inputNodes; j++) {
this.weights[i][j] += inputs[j] * hiddenLayerErrors[i] * this.learningRate;
}
this.biases[i] += hiddenLayerErrors[i] * this.learningRate;
}
for (let i = 0; i < this.outputNodes; i++) {
for (let j = 0; j < this.hiddenNodes; j++) {
this.weights[i][j] += hiddenLayerOutputs[j] * outputLayerErrors[i] * this.learningRate;
}
this.biases[i] += outputLayerErrors[i] * this.learningRate;
}
}
// Sigmoid function
.
sigmoid(x) {
return 1 / (1 + Math.exp(-x));
}
}
// Create a new neural network.
const neuralNetwork = new NeuralNetwork(2, 2, 1);
// Train the network.
for (let i = 0; i < 100000; i++) {
neuralNetwork.train(,);
neuralNetwork.train(,);