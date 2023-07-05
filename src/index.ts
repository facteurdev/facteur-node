import axios, { RawAxiosRequestConfig } from 'axios';

export type FacteurSendEmailPayload = {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
};

export class Facteur {
  constructor(private readonly apiKey: string) {}

  /**
   * Sends an email using the Facteur API.
   * @param payload Payload to send to the Facteur API, containing the email's content
   */
  public async sendEmail(payload: FacteurSendEmailPayload): Promise<void> {
    let response;
    try {
      response = await axios.post(
        'https://facteur.dev/api/v1/emails',
        payload,
        {
          headers: { Authorization: `Bearer ${this.apiKey}` },
        } as RawAxiosRequestConfig
      );
    } catch (error) {
      if ((error as any).response?.data?.error) {
        throw new Error(`[Facteur] ${(error as any).response.data.error}`);
      }

      throw new Error('[Facteur] An error occured while sending the email');
    }

    if (response!.status === 401) {
      throw new Error('[Facteur] Invalid API key');
    }

    if (response!.status !== 200) {
      throw new Error('[Facteur] An error occured while sending the email');
    }
  }
}

export default Facteur;
