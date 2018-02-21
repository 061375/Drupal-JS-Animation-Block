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
	$config = $this->getConfiguration();
	
    return array(
	      '#markup' => '<div id="homepage_animation"></div><div id="homepage_animation_script" data-script="_'.$config['script'].'.js"></div>',
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
	
	$handler = \Drupal::service('module_handler');
	$path    = \Drupal::root().'/';
	$path    .= $handler->getModule('homepage_animation')->getPath();
	$path    = $path.'/js/_/components/js/anims';
	$files = array_diff(scandir($path), array('..', '.'));
	$options = array();
	foreach($files as $file) {
	  // add some level of expected file type
	  if(false === strpos($file,'.js'))continue;
	  // strip file structure to just get the name
	  $fn = str_replace('.js','',str_replace('_','',$file));
	  $options[$fn] = t(ucfirst ($fn));
	}
	
	
	$form['homepage_animation_block_script'] = array(
		'#type' => 'select',
		'#title' => $this->t('Current Animation'),
		'#description' => $this->t('The animation to show on the block on page load'),
		'#options' => $options
	);
	return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->setConfigurationValue('script', $form_state->getValue('homepage_animation_block_script'));
  }
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    $default_config = \Drupal::config('homepage_animation.settings');
    return array(
      'script' => $default_config->get('homepage_animation.script')
    );
  }
}