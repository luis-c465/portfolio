> A [Python](https://python.org) library for machine learning

> [See Docs](https://www.tensorflow.org/)

# Examples

```py
# Training on the M Nist dataset

import tensorflow as tf

# Get the data
mnist = tf.keras.datasets.mnist

# Prepare the data
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0

# Create the model
model = tf.keras.models.Sequential([
  tf.keras.layers.Flatten(input_shape=(28, 28)),
  tf.keras.layers.Dense(128, activation='relu'),
  tf.keras.layers.Dropout(0.2),
  tf.keras.layers.Dense(10)
])
loss_fn = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True)
model.compile(optimizer='adam', loss=loss_fn, metrics=['accuracy'])

# Train the model
model.fit(x_train, y_train, epochs=5)

# View the results
model.evaluate(x_test, y_test, verbose=2)
```
