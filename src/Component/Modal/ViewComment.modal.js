import "./modal.css";
export function ViewCommentModal() {
    return <>
        <div class="popup" id="popup">
            <div class="popup-inner">
                <div class="popup__photo">
                    <img src="https://images.unsplash.com/photo-1515224526905-51c7d77c7bb8?ixlib=rb-0.3.5&s=9980646201037d28700d826b1bd096c4&auto=format&fit=crop&w=700&q=80" alt=""/>
                </div>
                <div class="popup__text">
                </div>
                <a class="popup__close" href="#">X</a>
            </div>
        </div>
    </>
}