"use strict";var KTAppInboxCompose=function(){var o;return{init:function(){null!==(o=document.querySelector("#kt_inbox_compose"))&&(KTAppInboxLib.initEditor(o,"kt_inbox_compose_editor"),KTAppInboxLib.initAttachments(document.querySelector("#kt_inbox_compose_attachments"),"kt_inbox_compose_editor"),KTAppInboxLib.initForm(document.querySelector("#kt_inbox_compose_form"),"kt_inbox_compose_editor"))}}}();KTUtil.onDOMContentLoaded((function(){KTAppInboxCompose.init()})),"undefined"!=typeof module&&void 0!==module.exports&&(module.exports=KTAppInboxCompose);