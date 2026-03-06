export const EDIT_EMAIL = 'editEmail' as const;
export const EDIT_SENHA = 'editSenha' as const;

export type EditEmailAction = {
  type: typeof EDIT_EMAIL;
  payload: { email: string };
};

export type EditSenhaAction = {
  type: typeof EDIT_SENHA;
  payload: { senha: string };
};

export type AuthAction = EditEmailAction | EditSenhaAction;

export const editEmail = (email: string): EditEmailAction => ({
  type: EDIT_EMAIL,
  payload: { email },
});

export const editSenha = (senha: string): EditSenhaAction => ({
  type: EDIT_SENHA,
  payload: { senha },
});
