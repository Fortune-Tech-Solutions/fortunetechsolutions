
const Modal = ({title, content, action}) => {
    return (
        <div className="modal" role="dialog">
            <div className="modal-box max-w-5xl rounded bg-base-300">
                <h3 className="text-2xl font-bold">{title}</h3>
                {content}
                <div className="modal-action">
                    {action}
                </div>
            </div>
        </div>
    );
}

export default Modal;
