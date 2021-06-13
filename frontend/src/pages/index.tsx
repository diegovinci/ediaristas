import { Button, Typography, Container } from '@material-ui/core';
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle';
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment';
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask';
import UserInformation from 'ui/components/data-display/UserInformation/UserInformation';
import { FormElementsContainer, ProfessionalsContainer, ProfessionalsPaper } from 'ui/styles/pages/index.style';

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça as diaristas'}
        subtitle={
          'Preencha seu endereço e veja as diaristas da sua localidade'
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
          />

          <Typography color={'error'}>CEP inválido</Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          >
            Buscar
          </Button>
        </FormElementsContainer>

        <ProfessionalsPaper>
          <ProfessionalsContainer>
            <UserInformation
              name={'Diego'}
              picture={'https://github.com/diegovinci.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Akira'}
              picture={'https://github.com/hanashiro.png'}
              rating={4}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Diego'}
              picture={'https://github.com/diegovinci.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Akira'}
              picture={'https://github.com/hanashiro.png'}
              rating={4}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Diego'}
              picture={'https://github.com/diegovinci.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Akira'}
              picture={'https://github.com/hanashiro.png'}
              rating={4}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Diego'}
              picture={'https://github.com/diegovinci.png'}
              rating={3}
              description={'São Paulo'}
            />
            <UserInformation
              name={'Akira'}
              picture={'https://github.com/hanashiro.png'}
              rating={4}
              description={'São Paulo'}
            />
          </ProfessionalsContainer>
        </ProfessionalsPaper>
      </Container>
    </div>
  );
}
