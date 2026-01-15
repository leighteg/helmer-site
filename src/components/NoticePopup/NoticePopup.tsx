import { createEffect, createSignal, onCleanup, onMount, Show } from "solid-js"
import "./NoticePopup.css"
import { makePersisted } from "@solid-primitives/storage"

const NoticePopup = (props: { title: string, body: string }) => {
    const [hasNoticed, setHasNoticed] = makePersisted((createSignal(false)), { storage: sessionStorage })

    createEffect(() => {
        if (!hasNoticed()) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }
    });

    onCleanup(() => {
        document.documentElement.style.overflow = "";
        document.body.style.overflow = "";
    });

    return (
        <Show when={!hasNoticed()}>
            <div id="notice-popup">
                <div class="container">
                    <div class="content-container">
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                    <div class="button-container">
                        <button onClick={() => setHasNoticed(true)}>got it</button>
                    </div>
                </div>
            </div>
        </Show>
    )
}

export default NoticePopup