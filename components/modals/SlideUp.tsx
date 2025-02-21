import styles from './SlideUp.module.css'

type Props = {
  isOpen:boolean;
  children?: React.ReactNode;
};

export default function SlideUp({isOpen,children}:Props){
    
    return(
        <div className={`${styles.container} ${isOpen?styles.open:styles.closeModal}`}>
           {children}
        </div>
        )
}