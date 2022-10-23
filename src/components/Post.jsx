
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/maiaramonteiro11.png" />
                    <div className={styles.authorInfo}>
                        <strong>Maiara Monteiro</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="25 de agosto ás 16:11h" dateTime="2022-08-25 16:10:54">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href=""> jane.design/doctorcare</a></p>
                <p><a href=""> #novoprojeto </a>
                <a href=""> #nlw </a>
                <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>

                <textarea 
                  placeholder="Deixe um comentário"
                />
                
                <button type="submit">Publicar</button>
                
            </form>

            <div className={styles.commentList}>
              <Comment />
              <Comment />
              <Comment />
              
            </div>
        </article>
    )
}