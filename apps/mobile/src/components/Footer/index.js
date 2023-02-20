import { View, Text, Image } from 'react-native';
import BlankAlert from '@vccrn/assets/blank-alert.png';

import { Logo } from '@/components/Logo';

import { base } from '@/styles';
import { styles } from './styles';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <View>
      <View style={styles.disclaimer}>
        <View style={base.container}>
          <Text style={styles.responsibleTitle}>Responsável Técnico</Text>
          <Text style={styles.responsibleText}>Fábio Camillo da Silva</Text>
          <Text style={styles.responsibleText}>CRP (06/84133)</Text>
        </View>

        <View style={base.container}>
          <View style={styles.noticeWrapper}>
            <Image source={BlankAlert} style={styles.noticeImage} />

            <Text style={styles.noticeText}>
              Atenção: este site não oferece tratamento ou aconselhamento imediato para pessoas em
              crise suicida. Em caso de crise, ligue para 188 (CVV) ou acesse o site www.cvv.org.br.
              Em caso de emergência, procure atendimento em um hospital mais próximo.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.copy}>
        <View style={base.container}>
          <View style={styles.copyWrapper}>
            <Text style={styles.copyText}>Copyright &copy; {currentYear}</Text>

            <Logo style={styles.copyLogo} />
          </View>
        </View>
      </View>
    </View>
  );
};

export { Footer };
