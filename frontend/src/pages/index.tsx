import { Button, CircularProgress, Container, Typography } from '@material-ui/core';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import { FormElementsContainer, ProfessionalsContainer, ProfessionalsPaper } from 'ui/styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

export default function Home() {
  const {
    error,
    getProfessionals,
    loading,
    professionals,
    remainingProfessionalsNumber,
    searchDone,
    setZipCode,
    validZipCode,
    zipCode
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça as diaristas'}
        subtitle={
          'Preencha seu endereço e veja as diaristas que atendem a sua localidade'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          />

          {error && <Typography color={'error'}>{error}</Typography>}

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
            disabled={!validZipCode || loading}
            onClick={() => { getProfessionals(zipCode) }}
          >
            {loading ? <CircularProgress size={20} /> : 'Buscar'}
          </Button>
        </FormElementsContainer>

        {searchDone && (professionals.length > 0 ?
          <ProfessionalsPaper>
            <ProfessionalsContainer>
              {professionals.map((professional, index) => {
                return (
                  <UserInformation
                    key={index}
                    name={professional.nome_completo}
                    picture={professional.foto_usuario}
                    rating={professional.reputacao}
                    description={professional.cidade}
                  />
                );
              })}
            </ProfessionalsContainer>

            <Container sx={{ textAlign: 'center' }}>
              {remainingProfessionalsNumber > 0 && (

                <Typography sx={{ mt: 5 }}>
                  ...e mais {remainingProfessionalsNumber} {remainingProfessionalsNumber > 1 ? 'profissionais atendem' : 'profissional atende'} ao seu endereço.
                </Typography>
              )}

              <Button
                variant={'contained'}
                color={'secondary'}
                sx={{ mt: 5 }}
              >
                Contratar uma diarista
              </Button>
            </Container>
          </ProfessionalsPaper>
          :
          (
            <Typography align={'center'} color={'textPrimary'}>
              Nenhuma diarista encontrada para essa região.
            </Typography>
          )
        )}
      </Container>
    </div >
  );
}
