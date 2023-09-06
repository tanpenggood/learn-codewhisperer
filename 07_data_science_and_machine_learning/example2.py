import torch.nn as nn
import torch
# define torch nn.module with 1 input layer, 3 hidden layers, and 1 output layer

class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()
        self.linear1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.linear2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out = self.linear1(x)
        out = self.relu(out)
        out = self.linear2(out)
        return out

# define a function to train the model
def train(model, train_loader, optimizer, criterion, epochs):
    for epoch in range(epochs):
        for batch_idx, (data, target) in enumerate(train_loader):
            optimizer.zero_grad()
            output = model(data)
            loss = criterion(output, target)
            loss.backward()
            optimizer.step()

# define a function to test the model
def test(model, test_loader, criterion):
    correct = 0
    total = 0
    for batch_idx, (data, target) in enumerate(test_loader):
        output = model(data)
        loss = criterion(output, target)
        _, predicted = torch.max(output.data, 1)
        total += target.size(0)
        correct += (predicted == target).sum().item()
    return correct / total

# define a function to save the model
def save_model(model, filename):
def save(model, filename):
    torch.save(model.state_dict(), filename)


# define a function to load the model
def load_model(model, filename):
    model.load_state_dict(torch.load(filename))
    return model