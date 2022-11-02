export interface Scenario {
  scenario: string | string[];
}
export type StatesTransfersService = 'transfers-v2-enviada' | 'transfers-v2-cancelada' | 'transfers-v2-error';
export type StatesUserContactService = 'user-contact-activo' | 'user-contact-baja';

export interface Handlers<T> {
  handlers: T[];
}

export const formatBaseResponse = (data, errorCode = '0', errorDescription = '') => {
  return {
    data,
    errorCode,
    errorDescription,
  };
};
