<?php
namespace Drupal\homepage_animation\Plugin\Block;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Block\BlockPluginInterface;
use Drupal\Core\Form\FormStateInterface;
/**
 * A Block to display an animation on the homepage
 *
 * @Block(
 *   id = "homepage_animation_block",
 *   admin_label = @Translation("Homepage Animation"),
 * )
 */
class HomepageAnimBlock extends BlockBase  implements BlockPluginInterface {
  /**
   * {@inheritdoc}
   */
  public function build() {
    return array(
	      '#markup' => '<div id="homepage_animation"></div>',
	      '#allowed_tags' => ['div'],
		  '#cache'=>array('max-age'=>0) 
	);
  }
  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();

    // return the HTML
	return array(
	      '#markup' => '<div id="homepage_animation"></div>',
	      '#allowed_tags' => ['div'],
		  '#cache'=>array('max-age'=>0) 
	);
  }
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->setConfigurationValue('name', $form_state->getValue('homepage_animation_block_name'));
  }
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $default_config = \Drupal::config('homepage_animation.settings');
    return array(
      'name' => $default_config->get('homepage_animation.name')
    );
  }
}