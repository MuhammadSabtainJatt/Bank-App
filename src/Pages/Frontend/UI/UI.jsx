import React from 'react';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const HomePage = () => {
  return (
    <div style={styles.container} className='bg-primary'>
      <Header />

      <main style={styles.main}>
        <img
          src="https://www.smallbizdaily.com/wp-content/uploads/2020/09/shutterstock_1150180799-1.jpg" // Replace with the URL of your image
          alt="A beautiful image"
          style={styles.image}
        />
      </main>

      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: "1 0 auto",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '79vh',
    width: '100%',
    maxWidth: '100%',
  },
};

export default HomePage;
