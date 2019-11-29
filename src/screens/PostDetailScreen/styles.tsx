import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flexDirection: 'column',
  },
  photo: {
    width: '100%',
    height: 210,
  },
  content: {
    padding: 20,
    flexDirection: 'column',
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  creator: {
    fontWeight: '700',
    fontSize: 14,
    color: 'rgba(0,0,0,0.8)',
    marginTop: 20,
  },
  created_at: {
    fontSize: 12,
    color: 'rgba(0,0,0,0.5)',
    marginTop: 6,
  },
  description: {
    marginTop: 30,
    fontSize: 17,
    lineHeight: 26,
    color: 'rgba(0,0,0,0.7)',
  },
  relatedPosts: {
    flexDirection: 'column',
    padding: 20,
  },
  wrap: {
    flexDirection: 'column',
  },
});