import styles from "./Homepage.module.css";
import PageNav from "../components/PageNav";
import {NavLink} from "react-router-dom";
import AppNav from "../components/AppNav";

export default function Homepage() {
    return (
        <main className={styles.homepage}>
            <PageNav/>
            <AppNav/>
            <section>
                <h1>
                    You travel the world.
                    <br/>
                    WorldWise keeps track of your adventures.
                </h1>
                <NavLink to={'/app'}>Go to the app</NavLink>
                <h2>
                    A world map that tracks your footsteps into every city you can think
                    of. Never forget your wonderful experiences, and show your friends how
                    you have wandered the world.
                </h2>
            </section>
        </main>
    );
}
