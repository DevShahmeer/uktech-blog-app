import Menu from '@/src/components/Menu/Menu'
import Comments from '@/src/components/comments/Comments'
import styles from './singlePage.module.css'
import Image from 'next/image'
import React from 'react'


const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: "no-store",
    });
    
    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status`);
    }
  
    return res.json()
  
  }

const SinglePage = async ({params}) => {

    const { slug } = params;

    const data = await getData(slug)
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    {data?.title}
                </h1>
                <div className={styles.user}>
                    {data?.user?.image && (
                    <div className={styles.userImageContainer}>
                        <Image src={data?.user.image} alt='' fill className={styles.avatar} />
                    </div>
                    )}
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>{data?.user.name }</span>
                        <span className={styles.date}>11.01.2023</span>
                    </div>
                </div>
            </div>
            {data?.img && (
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' alt='' fill className={styles.image} />
            </div>
            )}
        </div>
        <div className={styles.content}>
        <div className={styles.post}>
            <div className={styles.comment}>
            <Comments postSlug={slug} />
            </div>  
        </div>
        <Menu/>
        </div>
    </div>
  )
}

export default SinglePage
