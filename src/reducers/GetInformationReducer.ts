import { MyInformationType } from "./types";

interface GetInfor {
  name: string;
  url: string;
  phone: string;
  email: string;
  job: string;
  birthday: string;
  address: string;
  education: string;
  sex: string;
  majors: string;
  university: string;
  interest1: string;
  interest2: string;
  interest3: string;
  intent: string;
  id: string;
}

export type GetInforState = GetInfor[];

const { GET_MY_INFOR } = MyInformationType;

type GetInforAction = {
  type: typeof GET_MY_INFOR;
  payload: GetInfor[];
};

export const myInfoReducer = (state: GetInforState, action: GetInforAction) => {
  switch (action.type) {
    case GET_MY_INFOR:
      return action.payload;
    default:
      return state;
  }
};
