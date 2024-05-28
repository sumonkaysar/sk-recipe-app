const ConfirmationModal = ({ data, closeBtnRef, children }) => {

    return (
        <dialog id="confirmationModal" className="modal">
            <div className="modal-box py-20">
                <h4 className="text-lg text-center">{data}</h4>
                <div className="modal-action justify-center">
                    {children}
                    <form method="dialog">
                        <button ref={closeBtnRef} className="btn btn-info btn-outline">Cancel</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
};

export default ConfirmationModal