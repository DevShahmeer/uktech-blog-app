import Menu from '@/src/components/Menu/Menu'
import CardList from '@/src/components/cardList/CardList'
import styles from './blogPage.module.css'
import React from 'react'

const BlogPage = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Tech Blog</h1>
        <div className={styles.content}>
            <CardList />
            <Menu/>
        </div>
    </div>
  )
}

export default BlogPage
