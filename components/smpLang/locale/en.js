import enLocale from '@onesait/onesait-ds/lib/locale/lang/en'

export default {
  ...enLocale,
  label: 'English',
  labelMobile: 'EN',
  userLanguage: 'INGLES',
  serverError: 'Unexpected server error. Try again.',
  login: {
    title: 'Login',
    user: 'Username',
    password: 'Password',
    submitButton: 'Send',
    rules: {
      user: 'Please, type a user name',
      password: 'Please, type a password'
    },
    logging: 'Loading...',
    loginErrorTitle: 'Validation Error',
    loginError: 'Invalid user or wrong password.',
    forgotPassword: 'Forgot your password?',
    keepMeLogged: 'Keep me logged in',
    login: 'Login',
    footerLinks: ['faq', 'terms', 'conditions'],
    social: {
      title: 'Login with'
    }
  },
  selectEntity: {
    title: 'Select the entity',
    instalations: 'Application',
    entities: 'Entity',
    rules: {
      instalation: 'Please, select an instalation',
      entity: 'Please, select an entity'
    },
    enter: 'Enter',
    cancel: 'Cancel'
  },
  password: {
    title: 'Reset password',
    message: 'Type your account\'s email to proceed',
    email: 'Email',
    submitButton: 'Submit',
    goBack: 'Go back',
    error: 'Email not found',
    sending: 'Sending...',
    rules: {
      email: 'Email not found'
    },
    emailSubmitted: 'We\'ve sent an email with the instructions to reset your password to: ',
    done: 'Finish',
    emailError: 'We can\'t find any account with this email: '
  },
  notifications: {
    popoverTitle: 'Notifications'
  },
  breadcrumb: {
    home: 'Home',
    dashboard: 'Dashboard',
    entities: 'SIA Entities',
    tasks: 'Tasks',
    users: 'Users',
    randomUser: 'Random user ',
    randomString: 'Random string param: ',
    editProfile: 'Edit user',
    myUser: 'My user',
    editUser: 'Edit user',
    bins: 'Own bins and ranges',
    elements: 'Entity elements',
    operationslog: 'Operations log',
    sessioncontrol: 'Session control',
    messageslog: 'Messages log',
    monitoring: 'Monitoring',
    GeneralsParameters: 'Generals Parameters',
    countries: 'Countries',
    currencies: 'Currencies',
    languages: 'Languages',
    forwarding: 'Forwarding',
    accountinghistory: 'Accounting History',
    cards: 'Cards',
    cardBrands: 'Card Brands',
    cardTypes: 'Card Types',
    adquirerEntityTranslation: 'Acquiring entity translation',
    installations: 'Installations',
    workstationsconfig: 'Workstations Configuration',
    users_maintenance: 'Users maintenance',
    userProfiles: 'User Profiles',
    traslationofoperations: 'Translation of operations',
    translationofresolutions: 'Translation of resolutions',
    siaelements: 'SIA Elements',
    logicalChannels: 'Logical Channels',
    timeOuts: 'Time Outs',
    contactlessLimits: 'Contacless Limits',
    currenciesConversion: 'Currencies Conversion',
    emvLimitsAndParameters: 'EMV Limits and Parameters',
    descriptions: 'Descriptions'
  },
  general: {
    no: 'No',
    yes: 'Yes',
    yesRemove: 'Yes, remove',
    search: 'Search',
    placeolder: 'Write here',
    placeolderDate: 'Choose a date',
    placeholderClick: 'Click here',
    return: 'Return',
    select: 'Select',
    newData: 'New data',
    editData: 'Edit data',
    data: 'Data',
    records: 'All records',
    cancel: 'Cancel',
    save: 'Save',
    activate: 'Activate',
    desactivate: 'Desactivate',
    alerts: {
      title: 'Operation status',
      default: 'Unkwon, try again',
      koOperation: 'Unabled to complete operation',
      okAdd: 'Sucesses at adding',
      koAdd: 'Unabled to add',
      okModify: 'Sucesses at modifying',
      koModify: 'Unabled to modify',
      okRemove: 'Sucsses at removing',
      koRemove: 'Unabled to remove'
    },
    mandatory: 'Mandatory field',
    successfulOperation: 'Successful operation',
    errors: {
      errorTitle: 'Error',
      errorDefault: 'An error has occurred, the operation could not be performed correctly',
      errorAddNewItem: 'An error occurred while trying to add a new registry',
      errorDeleteItem: 'An error occurred while trying to delete the registry',
      errorUpdateItem: 'An error occurred while trying to update the registry'
    }
  },
  installations: {
    header: 'Security installations',
    detailHeader: 'Installation detail',
    list: 'Installations List',
    data: 'Basics data',
    table: {
      code: 'Installation',
      description: 'Installation Description',
      address: 'Installation Address',
      passwordValidity: 'Password Validity',
      maximumNumberAttemps: 'Max. Attemps',
      deletedInactiveUser: 'Delete Inac. User',
      deletedLog: 'Delete Log',
      actions: 'Actions'
    }
  },
  userProfiles: {
    header: 'User profiles',
    detailHeader: 'User profiles detail',
    list: 'User profiles list',
    data: 'Basics data',
    dialogDeleteTitle: 'Are you sure you want to delete the user profile?',
    table: {
      profile: 'Profile',
      description: 'Profile description',
      reducedDescription: 'Reduced Description',
      alt_ffhh: 'Discharged Date',
      bja_ffhh: 'Drop Date',
      accessType: 'Access Type',
      actions: 'Actions'
    }
  },
  devicesConfig: {
    header: 'Devices configuration',
    dialogs: {
      headerForm: 'Change device'
    },
    form: {
      infoHeader: 'Device Information',
      printercode: 'Printer',
      stampcode: 'Stamp'
    }
  },
  workstationsConfig: {
    header_nav: 'Workstations config. ',
    header: 'Workstations Configuration',
    dialogs: {
      headerDelete: 'Are you sure you want to delete the workstation configuration?'
    },
    table: {
      centtra: 'Workstation',
      printercode: 'Printer',
      stampcode: 'Stamp',
      printpinCode: 'Pin printer code',
      entity: 'Entity',
      acctions: 'Acctions'
    },
    form: {
      infoHeader: 'Workstation information',
      centtra: 'Workstation',
      entity: 'Entity',
      printercode: 'Printer',
      printerDescription: 'Printer description',
      stampcode: 'Stamp',
      stampDescription: 'Stamp description',
      printpinCode: 'PIN printer code'
    }
  },
  usersMaintenance: {
    header: 'Users maintenance',
    dialogs: {
      headerDelete: 'Are you sure you want to delete this user maintenance?',
      headerTable: 'Choose a workstation'
    },
    formSearch: {
      usuario: 'User code',
      codperfil: 'User profile'
    },
    table: {
      usuario: 'User',
      nombreusu: 'Name',
      apell1usu: 'Surname 1',
      apell2usu: 'Surname 2',
      fecbaja: 'Drop date',
      acctions: 'Acctions'
    },
    form: {
      infoHeader: 'Basic data',
      usuario: 'User',
      oficina: 'Office',
      centtra: 'Workstation',
      printercode: 'Printer',
      stampcode: 'Stamp',
      nombreusu: 'Name',
      apell1usu: 'Surname 1',
      apell2usu: 'Surname 2',
      caracHeader: 'User feature',
      codperfil: 'Internal profile',
      codperfilext: 'External profile',
      nivsegusu: 'Security level',
      verpan: 'Consult PAN in clear',
      codidioma: 'Language',
      vigconusu: 'Validity of user password',
      nummaxcon: 'Maximum incorrect passwords',
      fecactiva: 'Activation date',
      fecdesact: 'Deactivation date',
      fecalta: 'Discharged date',
      fecbaja: 'Drop date',
      passHeader: 'Password',
      fecinicon: 'Start of password validity',
      fecfincon: 'End of password validity',
      contador: 'Counter',
      validations: {
        codperfil: 'Requires at least one foreing or internal profile'
      }
    }
  }
}
