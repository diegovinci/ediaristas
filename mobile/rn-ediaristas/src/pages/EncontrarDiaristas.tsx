import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { ScrollView } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import TextInput from 'ui/components/inputs/TextInput/TextInput';
import Button from 'ui/components/inputs/Button/Button';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import {
  FormContainer,
  TextContainer,
  ErrorText,
  ResponseContainer
} from '@styles/pages/EncontrarDiaristas.styled';
import useIndex from 'data/hooks/pages/useIndex.page'
import useEncontrarDiarista from 'data/hooks/pages/useEncontrarDiarista.page.mobile';

const EncontrarDiaristas: React.FC = () => {
  const { colors } = useTheme();
  const {
    cep,
    setCep,
    cepValido,
    buscarProfissionais,
    erro,
    diaristas,
    buscaFeita,
    carregando,
    diaristasRestantes,
  } = useIndex();
  const { cepAutomatico } = useEncontrarDiarista();

  useEffect(() => {
    if (cepAutomatico && !cep) {
      setCep(cepAutomatico);
      buscarProfissionais(cepAutomatico);
    }
  }, [cepAutomatico]);

  return (
    <ScrollView>
      <PageTitle
        title={'Conheça as diaristas'}
        subtitle={'Preencha seu endereço e veja as diaristas que atendem a sua localidade'}
      />

      <FormContainer>
        <TextInputMask
          value={cep}
          onChangeText={setCep}
          type={'custom'}
          options={{
            mask: '99.999-999'
          }}
          customTextInput={TextInput}
          customTextInputProps={{
            label: 'Digite seu CEP'
          }}
        />

        {erro ? <ErrorText>{erro}</ErrorText> : null}

        <Button
          mode={'contained'}
          style={{ marginTop: 32 }}
          color={colors.accent}
          disabled={!cepValido || carregando}
          onPress={() => buscarProfissionais(cep)}
          loading={carregando}
        >
          Buscar
        </Button>
      </FormContainer>

      {buscaFeita && (diaristas.length > 0 ? (
        <ResponseContainer>
          {diaristas.map((diarista, index) => (
            <UserInformation
              key={index}
              name={diarista.nome_completo}
              rating={diarista.reputacao || 0}
              picture={diarista.foto_usuario || ''}
              description={diarista.cidade}
              darker={index % 2 === 1 ? true : false}
            />
          ))}

          {diaristasRestantes > 0 && (
            <TextContainer>
              ...e mais {diaristasRestantes} {diaristasRestantes > 1 ? 'diaristas atendem' : 'diarista atende'} ao seu endereço
            </TextContainer>
          )}

          <Button
            color={colors.accent}
            mode={'contained'}
          >
            Contratar uma diarista
          </Button>

        </ResponseContainer>
      ) : (
        <TextContainer>
          Ainda não temos nenhuma diariasta disponível em sua região
        </TextContainer>
      ))}
    </ScrollView >
  );
};

export default EncontrarDiaristas;