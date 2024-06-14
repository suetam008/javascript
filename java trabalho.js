import java.util.Scanner;

public class CalculadoraOrcamento {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Bem-vindo à Calculadora de Orçamento!");
        System.out.println("Escolha o tipo de serviço:");
        System.out.println("1. Tradução");
        System.out.println("2. Interpretação");
        int tipoServico = scanner.nextInt();

        if (tipoServico == 1) {
            calcularOrcamentoTraducao(scanner);
        } else if (tipoServico == 2) {
            calcularOrcamentoInterpretacao(scanner);
        } else {
            System.out.println("Opção inválida. Escolha 1 ou 2.");
        }

        scanner.close();
    }

    private static void calcularOrcamentoTraducao(Scanner scanner) {
        System.out.print("Título do Material: ");
        String tituloMaterial = scanner.next();

        System.out.print("Tipo de Material (VideoBook, Programa de TV, Propaganda de Marcas, Filme, Documentário): ");
        String tipoMaterial = scanner.next();

        System.out.print("Tempo do vídeo (em minutos): ");
        int tempoVideo = scanner.nextInt();

        System.out.print("Legendagem (Sim/Não): ");
        boolean temLegendagem = scanner.next().equalsIgnoreCase("Sim");

        System.out.print("Edição (simples ou completa): ");
        String tipoEdicao = scanner.next();

        // Cálculo para Tradução
        double valorMinuto;
        if (tipoMaterial.equalsIgnoreCase("Filme") || tipoMaterial.equalsIgnoreCase("Documentário") || tipoMaterial.equalsIgnoreCase("VideoBook")) {
            valorMinuto = temLegendagem ? 96.00 : 60.00;
        } else if (tipoMaterial.equalsIgnoreCase("Propaganda de Marcas")) {
            valorMinuto = 250.00;
        } else {
            System.out.println("Tipo de material inválido.");
            return;
        }

        double valorTotal = valorMinuto * tempoVideo;
        double direitoImagem = 0.3 * valorTotal;
        double valorTotalAPagar = valorTotal + direitoImagem;
        double imposto = 0.155 * valorTotalAPagar;

        // Saída
        System.out.println("\nDetalhes do Orçamento:");
        System.out.println("Valor do minuto: R$" + valorMinuto);
        System.out.println("Tempo total em minutos: " + tempoVideo);
        System.out.println("Valor total: R$" + valorTotal);
        System.out.println("Porcentagem de acréscimo do direito de imagem: 30%");
        System.out.println("Valor total a ser pago: R$" + valorTotalAPagar);
        System.out.println("Imposto recolhido (15,5%): R$" + imposto);
    }  
    
    private static void calcularOrcamentoTraducao(Scanner scanner) {
        if (tipoServico == 2) {
            // Coletar informações específicas para Interpretação
            System.out.print("Nome do evento: ");
            String nomeEvento = scanner.next();

            System.out.print("Tipo do evento (Jurídico, Educação, Artístico/Cultural, Vídeo Conferência): ");
            String tipoEvento = scanner.next();

            System.out.print("Tempo do evento (em minutos): ");
            int tempoEvento = scanner.nextInt();

            System.out.print("Ficará Gravado (Sim/Não): ");
            boolean gravado = scanner.next().equalsIgnoreCase("Sim");

            // Cálculo para Interpretação
            double valorHora;
            if (tempoEvento <= 60) {
                valorHora = 144.00;
            } else if (tempoEvento <= 360) {
                valorHora = 144.00 * 2;
            } else {
                int numProfissionais = (tempoEvento / 360) + 1;
                valorHora = 130.00 * numProfissionais;
            }

            if (tipoEvento.equalsIgnoreCase("Artístico/Cultural")) {
                valorHora = 192.00;
            }

            double direitoImagem = gravado ? 0.2 * valorHora * tempoEvento : 0;
            double valorTotalHoras = valorHora * tempoEvento;
            double valorTotalAPagar = valorTotalHoras + direitoImagem;
            double imposto = 0.155 * valorTotalAPagar;

            // Saída
            System.out.println("Detalhes do Orçamento:");
            System.out.println("Valor da hora por intérprete: R$" + valorHora);
            System.out.println("Quantidade de intérpretes: 1");
            System.out.println("Tempo total de horas: " + tempoEvento);
            System.out.println("Valor total das horas: R$" + valorTotalHoras);
            System.out.println("Porcentagem de acréscimo do direito de imagem: 20%");
            System.out.println("Valor total a ser pago: R$" + valorTotalAPagar);
            System.out.println("Imposto recolhido (15,5%): R$" + imposto);
        } else {
            System.out.println("Opção inválida. Escolha 2 para Interpretação.");
        }

        scanner.close();
}

