import { useState, useMemo } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [zipCode, setZipCode] = useState('');
  const validZipCode = useMemo(() => {
    return ValidationService.validateZipCode(zipCode);
  }, [zipCode]);
  const [error, setError] = useState('');
  const [searchDone, setSearchDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [professionals, setProfessionals] = useState([] as UserShortInterface[]);
  const [remainingProfessionalsNumber, setRemainingProfessionalsNumber] = useState(0);

  async function getProfessionals(zipCode: string) {
    setSearchDone(false);
    setLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[],
        quantidade_diaristas: number
      }>(`/api/diaristas-cidade?cep=${zipCode.replace(/\D/g, '')}`);

      setProfessionals(data.diaristas);
      setRemainingProfessionalsNumber(data.quantidade_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (err) {
      setError('CEP não encontrado');
      setLoading(false);
    }
  }

  return {
    error,
    getProfessionals,
    loading,
    professionals,
    remainingProfessionalsNumber,
    searchDone,
    setZipCode,
    validZipCode,
    zipCode
  };
}
