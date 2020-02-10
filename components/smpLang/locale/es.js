import esLocale from '@onesait/onesait-ds/lib/locale/lang/es'

export default {
  ...esLocale,
  label: 'Español',
  labelMobile: 'ES',
  userLanguage: 'CASTELLANO',
  serverError: 'Ha ocurrido un error inesperado en el servidor. Inténtalo de nuevo.',
  login: {
    title: 'Iniciar sesión',
    user: 'Nombre de usuario',
    password: 'Contraseña',
    submitButton: 'Enviar',
    rules: {
      user: 'Introduzca el usuario',
      password: 'Introduzca la contaseña'
    },
    logging: 'Iniciando sesión...',
    loginErrorTitle: 'Error de validación.',
    loginError: `La combinación usuario/contraseña no es valida.`,
    forgotPassword: '¿Has olvidado tu contraseña?',
    keepMeLogged: 'Mantener sesión iniciada',
    login: 'Entrar',
    footerLinks: ['faq', 'términos', 'condiciones'],
    social: {
      title: 'Haz login con'
    }
  },
  selectEntity: {
    title: 'Seleccione la entidad',
    instalations: 'Aplicación',
    entities: 'Entidad',
    rules: {
      instalation: 'Por favor, seleccione una instalación',
      entity: 'Por favor, seleccione una entidad'
    },
    enter: 'Entrar',
    cancel: 'Cancelar'
  },
  password: {
    title: 'Restablecer contraseña',
    message: 'Introduce una cuenta de correo electrónico vinculada al producto para continuar',
    email: 'Correo electrónico',
    submitButton: 'Enviar',
    goBack: 'Volver',
    error: 'Email no encontrado.',
    sending: 'Enviando...',
    rules: {
      email: 'Email no encontrado'
    },
    emailSubmitted: 'Hemos enviado un correo electrónico con instrucciones para poder restablecer su contraseña a: ',
    done: 'Finalizar',
    emailError: 'No existe ninguna cuenta vinculada a este correo electrónico: '
  },
  notifications: {
    popoverTitle: 'Notificaciones'
  },
  breadcrumb: {
    home: 'Inicio',
    dashboard: 'Escritorio',
    entities: 'Entidades SIA',
    tasks: 'Tareas',
    users: 'Usuarios',
    randomUser: 'Usuario random ',
    randomString: 'Random string param: ',
    editProfile: 'Editar mi perfil',
    myUser: 'Mi usuario',
    editUser: 'Editar usuario',
    bins: 'Bines y rangos propios',
    elements: 'Elementos de la entidad',
    detailsBin: 'Detalle',
    addBin: 'Alta',
    editBin: 'Editar',
    showBin: 'Ver',
    sessioncontrol: 'Control sesion',
    operationslog: 'Log de operaciones',
    messageslog: 'Log de mensajes',
    monitoring: 'Monitorización',
    GeneralsParameters: 'Parametros Generales',
    countries: 'Paises',
    currencies: 'Monedas',
    languages: 'Idiomas',
    forwarding: 'Reenvíos',
    accountinghistory: 'Histórico Contable',
    cards: 'Tarjetas',
    cardBrands: 'Marcas de Tarjetas',
    cardTypes: 'Tipos de Tarjetas',
    installations: 'Instalaciones',
    adquirerEntityTranslation: 'Traducción entidad adquirente',
    workstationsconfig: 'Configuración de puesto de trabajo',
    userProfiles: 'Perfiles de usuario',
    users_maintenance: 'Mantenimiento usuarios',
    traslationofoperations: 'Traducción de operaciones',
    translationofresolutions: 'Traducción de resoluciones',
    siaelements: 'Elementos SIA',
    logicalChannels: 'Canales Lógicos',
    timeOuts: 'Time Outs',
    contactlessLimits: 'Limites Contacless',
    currenciesConversion: 'Conversion de Monedas',
    emvLimitsAndParameters: 'Limites y parametros EMV',
    descriptions: 'Descripciones'
  },
  general: {
    no: 'No',
    yes: 'Si',
    yesRemove: 'Si, eliminar',
    search: 'Buscar',
    placeolder: 'Escribe aquí',
    placeolderDate: 'Seleccione una fecha',
    placeholderClick: 'Pulse aquí',
    return: 'Volver',
    select: 'Seleccione',
    newData: 'Alta datos',
    editData: 'Editar datos',
    data: 'Datos',
    records: 'Registros',
    cancel: 'Cancelar',
    save: 'Guardar',
    activate: 'Activar',
    desactivate: 'Desactivar',
    alerts: {
      title: 'Estado de la opereción',
      default: 'Desconocido, prueba de nuevo',
      koOperation: 'No se pudo realizar la opereción',
      okAdd: 'Se pudo realizar el alta',
      koAdd: 'No se pudo realizar el alta',
      okModify: 'Se pudo realizar la modificación',
      koModify: 'No se pudo realizar la modificación',
      okRemove: 'Se pudo realizar la baja',
      koRemove: 'No s epudo realizar la baja'
    },
    mandatory: 'Campo obligatorio',
    successfulOperation: 'Operación realizada correctamente',
    errors: {
      errorTitle: 'Error',
      errorDefault: 'Se ha producido un error, la operación no se ha podido realizar correctamente',
      errorAddNewItem: 'Se ha producido un error al intentar añadir un nuevo registro',
      errorDeleteItem: 'Se ha producido un error al intentar eliminar el registro',
      errorUpdateItem: 'Se ha producido un error al intentar actualizar el registro'
    }
  },
  installations: {
    header: 'Instalaciones de seguridad',
    detailHeader: 'Detalle instalación',
    list: 'Listado de instalaciones',
    data: 'Datos basicos',
    table: {
      code: 'Instalación',
      description: 'Descripción de la instalación',
      address: 'Dirección de la instalación',
      passwordValidity: 'Vigencia contraseña',
      maximumNumberAttemps: 'Máx. Intentos',
      deletedInactiveUser: 'Borrado usuario inac.',
      deletedLog: 'Borrado Log',
      actions: 'Acciones'
    }
  },
  userProfiles: {
    header: 'Perfiles de usuarios',
    detailHeader: 'Detalles del perfil de usuario',
    list: 'Listado de perfiles de usuario',
    data: 'Datos basicos',
    dialogDeleteTitle: '¿Está seguro que desea eliminar el perfil de usuario?',
    table: {
      profile: 'Perfil',
      description: 'Descripción del perfil',
      reducedDescription: 'Descripción reducida',
      alt_ffhh: 'Fecha de Alta',
      bja_ffhh: 'Fecha de Baja',
      accessType: 'Tipo de Acceso',
      actions: 'Acciones'
    }
  },
  devicesConfig: {
    header: 'Configuración dispositivos',
    dialogs: {
      headerForm: 'Cambio de dispositivo'
    },
    form: {
      infoHeader: 'Información del dispositivo',
      printercode: 'Impresora',
      stampcode: 'Estampadora'
    }
  },
  workstationsConfig: {
    header_nav: 'Config. puesto trabajo',
    header: 'Configuración de puesto de trabajo',
    dialogs: {
      headerDelete: '¿Está seguro de querer eliminar la configuración del puesto de trabajo?'
    },
    table: {
      centtra: 'Centro de trabajo',
      printercode: 'Impresora',
      stampcode: 'Estampadora',
      printpinCode: 'Código de impresora pin',
      entity: 'Entidad',
      acctions: 'Acciones'
    },
    form: {
      infoHeader: 'Información del puesto de trabajo',
      centtra: 'Centro de trabajo',
      entity: 'Entidad',
      printercode: 'Impresora',
      printerDescription: 'Drescripción impresora',
      stampcode: 'Estampadora',
      stampDescription: 'Descripción de estampadora',
      printpinCode: 'Código de impresora PIN'
    }
  },
  usersMaintenance: {
    header: 'Mantenimiento usuarios',
    dialogs: {
      headerDelete: '¿Está seguro de querer eliminar este mantenimiento de usuario?',
      headerTable: 'Elija un puesto de trabajo'
    },
    formSearch: {
      usuario: 'Cod.Usuario',
      codperfil: 'Perfil de usuario'
    },
    table: {
      usuario: 'Usuario',
      nombreusu: 'Nombre',
      apell1usu: 'Apellido 1',
      apell2usu: 'Apellido 2',
      fecbaja: 'Fecha de baja',
      acctions: 'Acciones'
    },
    form: {
      infoHeader: 'Datos básicos',
      usuario: 'Usuario',
      oficina: 'Oficina',
      centtra: 'Centro de trabajo',
      printercode: 'Impresora',
      stampcode: 'Estampadora',
      nombreusu: 'Nombre',
      apell1usu: 'Apellido 1',
      apell2usu: 'Apellido 2',
      caracHeader: 'Características de usuario',
      codperfil: 'Perfil interno',
      codperfilext: 'Perfil externo',
      nivsegusu: 'Nivel de seguridad',
      verpan: 'Consultar PAN en claro',
      codidioma: 'Idioma',
      vigconusu: 'Vigencia de ocntraseña de usuario',
      nummaxcon: 'Máximo de contraseñas incorrectas',
      fecactiva: 'Fecha de activación',
      fecdesact: 'Fecha de desactivación',
      fecalta: 'Fecha de alta',
      fecbaja: 'Fecha de baja',
      passHeader: 'Contraseña',
      fecinicon: 'Inicio de vigencia de contraseña',
      fecfincon: 'Fin de vigencia de contraseña',
      contador: 'Contador',
      validations: {
        codperfil: 'Se requiere al menos un perfil interno o externo'
      }
    }
  }
}
