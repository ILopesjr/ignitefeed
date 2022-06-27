import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ILopesjr.png" />
          <div className={styles.authorInfo}>
            <strong>Ivanildo Lopes</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="26 de Junho às 07h:31min" dateTime="2022-06-26 07:29:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
        <p>
          Officia voluptas <a href="#">optio ratione</a> enim molestiae iusto,
          unde nemo tempore?
        </p>
        <p>
          Debitis voluptatum <a href="#">laboriosam a maxime</a> perferendis
          modi quae facere itaque ducimus obcaecati.
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
