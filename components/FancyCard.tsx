import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
      <View style={styles.container}>
        <Text  style={styles.headingText}>Fancy Card</Text>

      <View style={[styles.card, styles.cardElevated]}>
        {/* Card Image */}
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={styles.cardImage}
        />

        {/* Card Body */}
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Component</Text>
          <Text style={styles.cardLabel}>From Meta</Text>
          <Text style={styles.cardDescription}>
            React Native is used for building mobile apps using JavaScript and TypeScript.
          </Text>
          <Text style={styles.footer}>Here is the footer</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF', // Nice blue color
    marginBottom: 10,
  },
  card: {
    width: 320,
    borderRadius: 10,
    overflow: 'hidden', // Prevents content from overflowing the border radius
    marginVertical: 10,
  },
  cardElevated: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
  cardImage: {
    width: '100%', // Full width of the card
    height: 180, // Adjusted height for better aspect ratio
    resizeMode: 'cover', // Makes the image cover the width properly
  },
  cardBody: {
    padding: 15,
    backgroundColor: '#F7F8FA', // Soft gray background for body
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333', // Darker text for better readability
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 14,
    color: '#555', // Slightly dimmed text
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20, // Improve readability with better spacing
    marginBottom: 10,
  },
  footer: {
    fontSize: 12,
    color: '#888', // Lighter text for footer
    textAlign: 'right',
  },
});
