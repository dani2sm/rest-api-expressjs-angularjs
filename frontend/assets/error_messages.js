/**
 * Created by yassine on 24/03/15.
 */

var errors = new Object()

errors["PROFIL_NOT_FOUND"] = "Profil non existant"
errors["MENU_ENTRY_NOT_FOUND"] = "Rubrique non existante"
errors["ORGANIZER_NOT_FOUND"] = "Ordonnateur non trouvé"
errors["PROVIDER_NOT_FOUND"] = "Fourniseur non trouvé"
errors["BUYER_NOT_FOUND"] = "Acheteur non trouvé"
errors["PAYMENT_MODE_NOT_FOUND"] = "Mode de paiement non trouvé"
errors["INCORRECT_PHONE_NUMBER"] = "Numéro de tel incorrecte"
errors["DUPLICATE_NAME"] = "Nom dupliqué"
errors["CAN_NOT_INSERT_DUPLICATE_VALUE"] = "Valeur dupliquée"
errors["OPERATION_NOT_FOUND"] = "Opération non trouvée"
errors["USER_EXIST"] = "Utilisateur existant"
errors["USER_NOT_FOUND"] = "Utilisateur non trouvé"
errors["LOGIN_INVALID"] = "Login invalide"
errors["PASSWORD_INVALID"] = "Mot de passe invalide"
errors["NUMBER_INVALID"] = "Numéro invalide"
errors["PURCHASE_NOT_FOUND"] = "Facture non trouvée"
errors["ERROR_PARSING_INVOICE_DATE"] = "Date de facture non valide"
errors["ERROR_PARSING_EXPEDITION_DATE"] = "Date d'expédition non valide"
errors["EMPTY_INVOICE_NO"] = "Numéro de facture vide"
errors["SETTING_NOT_FOUND"] = "Paramètre non trouvée"
errors["SETTING_EMPTY"] = "Paramètre vide"
errors["VALUE_EMPTY"] = "Valeur vide"
errors["PROVIDER_HAS_SHOPPING"] = "Fournisseur utilisé"
errors["BUYER_HAS_SHOPPING"] = "Acheteur utilisé"
errors["BUYER_IS_ASSIGNED"] = "Acheteur utilisé"
errors["ORGANIZER_HAS_SHOPPING"] = "Ordonnateur utilisé"
errors["ERROR_PARSING_PURCHASE_NOTE_DATE"] = "Date de BE non valide"
errors["ERROR_PARSING_PURCHASE_NOTE_START_DATE"] = "Date début BE non valide"
errors["ERROR_PARSING_PURCHASE_NOTE_END_DATE"] = "Date fin BE non valide"
errors["PURCHASE_NOTE_NOT_FOUND"] = "Facture non trouvée"
errors["EMPTY_PURCHASE_NOTE_NO"] = "Numéro de facture vide"
errors["FIELD_NAME_EMPTY"] = "Champs vide"
errors["FIELD_PAYMENT_MODE_EMPTY"] = "Champs mode de paiement vide"
errors["PROVIDER_IS_ASSIGNED"] = "Fournisseur utilisé"
errors["ORGANIZER_IS_ASSIGNED"] = "Ordonnateur utilisé"
errors["PAYMENT_MODE_IS_ASSIGNED"] = "Paiement mode utilisé"
errors["PROFIL_NOT_DEFINED"] = "Profil non défini"
errors["USERNAME_ALREADY_USED"] = "Login déja utilisé"
errors["PROFILE_IS_ASSIGNED"] = "Profil utilisé"
errors["PROFIL_EXIST"] = "Profil existant"
errors["NOT_ALLOWED"] = "Vous n'êtes pas autorisé à effectuer cette opération"
errors["PURCHASE_NOTE_HAS_DEPENDANCIES"] = "BE utilisé"
errors["UNAUTHORIZED"] = "Vous n'êtes pas autorisé à effectuer cette opération"
errors["RECEIVER_BE_NOT_FOUND"] = "Destinataire BE non trouvé"
errors["FIELD_LABEL_EMPTY"] = "Le champs libellé est vide"
errors["CURRENCY_NOT_FOUND"] = "Devise non trouvée"
errors["FIELD_FUND_EMPTY"] = "Champs Fonds vide"
errors["FIELD_CURRENCY_EMPTY"] = "Champs devise vide"
errors["ACCOUNT_NOT_FOUND"] = "Compte non trouvé"
errors["CODE_EMPTY"] = "Champs code vide"
errors["INVALID_AMOUNT_FORMAT"] = "Montant non valide"
errors["ERROR_PARSING_TRANSACTION_DATE"] = "Date d'opération non valide"
errors["FIELD_REFERENCE_EMPTY"] = "Le champ référence est vide"
errors["FIELD_MOVEMENT_EMPTY"] = "Le champ mouvement est vide"
errors["ERROR_PARSING_CASH_TRANSACTION_NOTE_DATE"] = "Date de BE non valide"
errors["ERROR_PARSING_CASH_TRANSACTION_NOTE_START_DATE"] = "Date début BE non valide"
errors["ERROR_PARSING_CASH_TRANSACTION_NOTE_END_DATE"] = "Date fin BE non valide"
errors["CASH_TRANSACTION_NOTE_NOT_FOUND"] = "Facture non trouvée"
errors["EMPTY_CASH_TRANSACTION_NOTE_NO"] = "Numéro de facture vide"
errors["CASH_TRANSACTION_NOTE_HAS_DEPENDENCIES"] = "BE utilisé"
errors["PAYMENT_NOT_FOUND"] = "Règlement non trouvé"
errors["ERROR_PARSING_PAYMENT_DATE"] = "Date règlement non valide"
errors["TRACE_NOT_FOUND"] = "Objet non trouvé"
errors["AMOUNT_IS_NOT_NUMERIC"] = "Le montant doit être numérique"
errors["FIELD_DATE_EMPTY"] = "Le champs date est vide"
errors["FIELD_USER_EMPTY"] = "Le champs utilisateur n'est pas renseigné"
errors["FIELD_MENUENTRY_EMPTY"] = "Rubrique non renseignée"
errors["PURCHASE_IS_ATTACHED_TO_NOTE"] = "La facture est attachée à un BE"
errors["CASH_TRANSACTION_IS_ATTACHED_TO_NOTE"] = "L'opération est attachée à un BE"
errors["ACCOUNT_IS_ASSIGNED"] = "Compte utilisé !"
errors["CURRENCY_IS_ASSIGNED"] = "Devise utilisée !"
errors["RECEIVER_BE_IS_ASSIGNED"] = "Destinataire BE utilisé !"
errors["FIELD_DATE_EMPTY"] = "Merci de saisir une date valide";
errors["FIELD_USER_EMPTY"] = "Merci de choisir un utilisateur ";
errors["FIELD_MENUENTRY_EMPTY"] = "Merci de choisir une fonctionnalité";
errors["PROVIDER_IS_ASSIGNED"] = "Fournisseur ayant des dependances";

/*
for (var key in errors) {
    var str = 'var ' + key + '"] = "' + errors[key] + '"'
    eval(str)
}
*/

function erroor(errorCode) {
    var msg = errorCode
    msg = errors[errorCode]
    return msg
}