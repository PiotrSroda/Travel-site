import $ from 'jquery';

class Modal {
  constructor(){
    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalButton = $('.modal__close');
    this.events();
  }

  events(){
    //clicking the open modal button
    this.openModalButton.click(this.openModal.bind(this));//binding this means that it is pointing towards the proper this
    // clicking the x close modal button
    this.closeModalButton.click(this.closeModal.bind(this));//binding this means that it is pointing towards the proper this
    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));

  }
 keyPressHandler(e){
   if (e.keyCode == 27) {
     this.closeModal();
   }
 }

 openModal(){
   this.modal.addClass('modal--is-visible');
   return false; // prevents from scrolling automatically up
 }

 closeModal(){
   this.modal.removeClass("modal--is-visible");
 }

}

export default Modal;
