# Expo Image Loading Issue on Real Device

This repository demonstrates a bug in Expo where an image fails to load on a real device after successful download, despite working correctly in the simulator.  The issue is related to how Expo handles image assets and their URIs on physical devices.

## Bug Description

The application attempts to load an image using `Expo.Asset.fromModule` and `asset.downloadAsync()`. While the download completes without errors, the image doesn't render on the device. The simulator displays the image correctly.

## Steps to Reproduce

1. Clone the repository.
2. Run `expo start`.
3. Run the app on a real device.
4. Observe that the image does not load.

## Solution

The solution involves using the `Image` component from `react-native` directly. This allows for loading the image from a local file path.  The `require('./assets/image.jpg')` returns the correct file path for use with `Image` component. No need for `Expo.Asset`.
