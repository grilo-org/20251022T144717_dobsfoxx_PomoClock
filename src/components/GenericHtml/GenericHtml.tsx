import styles from './GenericHtml.module.css';

type GenericHtmlProps = {
  children: React.ReactNode;
};

export default function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={styles.generichtml}>{children}</div>;
}
