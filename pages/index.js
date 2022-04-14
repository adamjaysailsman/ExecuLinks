import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Imagine from '../components/Imagine';
import Solution from '../components/Solution';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <Content />
      <Imagine />
      <Solution />
      <Testimonial />
    </>
  );
}
