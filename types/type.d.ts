import { StyleProp, TouchableOpacityProps } from 'react-native';

declare interface ButtonProps extends TouchableOpacityProps {
  title: string;
  IconLeft?: React.ComponentType<any>;
  textStyle?: string;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

declare interface StepIndicatorProps {
  current: number;
  total: number;
}
declare interface CustomInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  label: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  labelStyle?: string
  textStyle?: string
  rightIcon?: React.ReactNode;
}

export type WorkplaceType = "hospital" | "clinic" | "";
export type Gender = "Male" | "Female" | "Other" | "";
export type BloodGroup = "AB+" | "AB-" | "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "";

export interface Workplace {
  type: WorkplaceType;
  hospitalId?: string;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
}

export interface DoctorRegistrationForm {
  firstName: string;
  lastName: string;
  email: string;
  aadharNo: string;
  gender: Gender;
  password: string;
  confirmPassword: string;
  phone: string;
  specialization: string;
  experience: number;
  feePerVisit: number;
  licenseNumber: string;
  patientLimit: number;
  workplace: Workplace;
}

export interface HospitalProps {
  name: string;
  address: string;
  city: string;
  state: string;
  phone: number;
  pincode: number;
  avatarUrl?: string;
}

export interface FullAddressPatient {
  houseNumber: string;
  address: string;
  landmark?: string;
  city: string;
  state: string;
}

export interface PatientRegistrationForm {
  firstName: string;
  lastName?: string;
  email: string;
  password: string;
  phone: string;
  dob: Date | string;
  gender: Gender;
  bloodGroup?: BloodGroup;
  allergies?: string;
  aadharNo: string;
  fullAddress: FullAddressPatient;
}
