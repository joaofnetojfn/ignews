import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from "./styles.module.scss";

export default function SignInButton() {
  const [isUserLoggedIn] = useSession();
 

  return isUserLoggedIn ? (
    <button 
      type="button" 
      className={styles.signInButton}
      onClick={() => signOut()}
      >
      <FaGithub color="#04d361" />
        {isUserLoggedIn.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button 
      type="button"
      className={styles.signInButton}
      onClick= {() => signIn('github')}
    >
      <FaGithub color="#eba417" />
      Sign In with GitHub
    </button>
  );
}
