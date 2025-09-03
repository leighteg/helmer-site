import { createSignal, onCleanup, Show, For, onMount, createEffect } from "solid-js";
import "./Carousel.css";

const Carousel = (props: { images: string[] }) => {
    const images = props.images;

    const [enlargedImage, setEnlargedImage] = createSignal<string>();

    let interval: number;
    const startSlide = () => {
        interval = setInterval(next, 4000);
    }

    const [current, setCurrent] = createSignal(0);

    const next = () => setCurrent(c => (c + 1) % images.length);
    const prev = () => setCurrent(c => (c - 1 + images.length) % images.length);

    let touchStartX: number | null = null;

    const handleTouchStart = (e: TouchEvent) => {
        clearInterval(interval)
        touchStartX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
        if (touchStartX === null) return;
        const touchEndX = e.changedTouches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) { // swipe threshold
            if (deltaX > 0) setCurrent(c => (c + 1) % images.length);
            else setCurrent(c => (c - 1 + images.length) % images.length);
        }

        touchStartX = null;

        startSlide()
    };

    startSlide();
    onCleanup(() => clearInterval(interval));

    onMount(() => {
        document.addEventListener('click', (e) => {
            let element = document.elementFromPoint(e.x, e.y);

            if (enlargedImage() && element) {
                if (element.className === "carousel-image" || element.parentElement?.id === "enlarged-image-container") return
                setEnlargedImage(undefined)
            }
        })
    })

    createEffect(() => {
        if (enlargedImage()) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = '';
        }
    })

    return (
        <>
        <div class="carousel-container" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <span class="carousel-title">helmer</span>

            <div class="carousel-wrapper" style={{ transform: `translateX(-${current() * 100}%)` }}>
                <For each={images}>{(image) =>
                    <img src={image} class="carousel-image" onClick={() => setEnlargedImage(image)} />
                }</For>
            </div>

            <button class="carousel-button prev" onClick={() => {
                clearInterval(interval)
                prev()
                startSlide()
            }}>
                ‹
            </button>
            <button class="carousel-button next" onClick={() => {
                clearInterval(interval)
                next()
                startSlide()
            }}>
                ›
            </button>
        </div>

        <Show when={enlargedImage()}>
            <div id="enlarged-image-container">
                <img src={enlargedImage()} width={'100%'} />
            </div>
        </Show>
        </>
    );
};

export default Carousel;