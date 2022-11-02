import { Scenario } from '../helpers/helper';
export interface Contact {
  id: number;
  idCliente: string;
  referencia: string;
  cbu: string;
  banco: string;
  nombreApellido: string;
  cuit: string;
  tipoCuentaTitularidad?: string;
  mail?: string;
  telefono?: string;
  fechaCreacion: Date;
  estado: number;
  fechaUltimaTransferencia: Date;
  cantidadTransferencias: number;
  tipoCuenta: string;
}
export const frecuentes: (Contact & Scenario)[] = [
  {
    scenario: ['user-contact-active'],
    id: 151,
    idCliente: '27439738516',
    referencia: 'LUIS DANILO',
    cbu: '4380000511000012051458',
    banco: 'IUDU',
    tipoCuentaTitularidad: 'Caja de ahorro pesos',
    mail: 'toni@gmail.com',
    telefono: '444444',
    nombreApellido: 'LUIS DANILO',
    cuit: '23928200019',
    fechaCreacion: new Date(),
    estado: 0,
    fechaUltimaTransferencia: new Date(),
    cantidadTransferencias: 0,
    tipoCuenta: '',
  },
  {
    scenario: ['user-contact-active'],
    id: 130,
    idCliente: '27439738516',
    referencia: 'OSCAR  ALBERTO',
    cbu: '4380000511000012052000',
    banco: 'IUDU',
    tipoCuentaTitularidad: 'Caja de ahorro pesos',
    mail: '',
    telefono: '',
    nombreApellido: 'OSCAR  ALBERTO',
    cuit: '20137444837',
    fechaCreacion: new Date(),
    estado: 0,
    fechaUltimaTransferencia: new Date(),
    cantidadTransferencias: 0,
    tipoCuenta: '',
  },
  {
    scenario: ['user-contact-active'],
    id: 129,
    idCliente: '27439738516',
    referencia: 'CORDERO FUENMAYOR YO',
    cbu: '4380000511000012029602',
    banco: 'IUDU',
    tipoCuentaTitularidad: 'Cuenta corriente pesos',
    mail: '',
    telefono: '',
    nombreApellido: 'CORDERO FUENMAYOR YO',
    cuit: '27960591157',
    fechaCreacion: new Date(),
    estado: 0,
    fechaUltimaTransferencia: new Date(),
    cantidadTransferencias: 0,
    tipoCuenta: 'ACTIVA',
  },
  {
    scenario: ['user-contact-canceled'],
    id: 128,
    idCliente: '27439738516',
    referencia: 'RODRIGUEZ PAULA',
    cbu: '0000009300022892616129',
    banco: 'Citibank',
    tipoCuentaTitularidad: 'Cuenta virtual',
    mail: '',
    telefono: '444444',
    nombreApellido: 'RODRIGUEZ PAULA',
    cuit: '27361713457',
    fechaCreacion: new Date(),
    estado: 0,
    fechaUltimaTransferencia: new Date(),
    cantidadTransferencias: 0,
    tipoCuenta: 'CANCELADA',
  },
];
const ob = {
  id: '',
  name: '',
  scenario: ['exito'],
};
