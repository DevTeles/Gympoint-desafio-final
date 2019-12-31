import React from 'react';
import Layout from '~/pages/Layout';

import {
  Container,
  Panel,
  QuestionInfo,
  QuestionHeader,
  Title,
  Time,
  Description,
  AnswerInfo,
  AnswerHeader,
} from './styles';

export default function Datail({ navigation }) {
  const helpOrder = navigation.getParam('helpOrder');
  return (
    <Layout isGoBack page="List">
      <Container>
        <Panel>
          <QuestionInfo>
            <QuestionHeader>
              <Title>PERGUNTA</Title>
              <Time>{helpOrder.dateFormattedCreatedAt}</Time>
            </QuestionHeader>
            <Description>{helpOrder.question}</Description>
          </QuestionInfo>

          <AnswerInfo>
            <AnswerHeader>
              <Title>RESPOSTA</Title>
              <Time>{helpOrder.dateFormattedAnswerAt}</Time>
            </AnswerHeader>

            <Description>{helpOrder.answer}</Description>
          </AnswerInfo>
        </Panel>
      </Container>
    </Layout>
  );
}
